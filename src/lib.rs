extern crate cfg_if;
extern crate wasm_bindgen;
extern crate web_sys;
extern crate rand;

mod utils;

use std::fmt;
use wasm_bindgen::prelude::*;
use web_sys::console;
use rand::Rng;
pub struct Timer<'a> {
    name: &'a str,
}

impl<'a> Timer<'a> {
    pub fn new(name: &'a str) -> Timer<'a> {
        console::time_with_label(name);
        Timer { name }
    }
}

impl<'a> Drop for Timer<'a> {
    fn drop(&mut self) {
        console::time_end_with_label(self.name);
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
}

impl Cell {
    fn toggle(&mut self) {
        *self = match *self {
            Cell::Dead => Cell::Alive,
            Cell::Alive => Cell::Dead,
        };
    }
}

#[wasm_bindgen]
pub struct Universe {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

impl Universe {
    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }

    /// Get the dead and alive values of the entire universe.
    pub fn get_cells(&self) -> &[Cell] {
        &self.cells
    }

    /// Set cells to be alive in a universe by passing the row and column
    /// of each cell as an array.
    pub fn set_cells(&mut self, cells: &[(u32, u32)]) {
        for (row, col) in cells.iter().cloned() {
            let idx = self.get_index(row, col);
            self.cells[idx] = Cell::Alive;
        }
    }

    fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;

        let north = if row == 0 {
            self.height - 1
        } else {
            row - 1
        };

        let south = if row == self.height - 1 {
            0
        } else {
            row + 1
        };

        let west = if column == 0 {
            self.width - 1
        } else {
            column - 1
        };

        let east = if column == self.width - 1 {
            0
        } else {
            column + 1
        };

        let nw = self.get_index(north, west);
        count += self.cells[nw] as u8;

        let n = self.get_index(north, column);
        count += self.cells[n] as u8;

        let ne = self.get_index(north, east);
        count += self.cells[ne] as u8;

        let w = self.get_index(row, west);
        count += self.cells[w] as u8;

        let e = self.get_index(row, east);
        count += self.cells[e] as u8;

        let sw = self.get_index(south, west);
        count += self.cells[sw] as u8;

        let s = self.get_index(south, column);
        count += self.cells[s] as u8;

        let se = self.get_index(south, east);
        count += self.cells[se] as u8;

        count
    }
}

/// Public methods, exported to JavaScript.
#[wasm_bindgen]
impl Universe {
    pub fn tick(&mut self) {
        // let _timer = Timer::new("Universe::tick");

        let mut next = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                let next_cell = match (cell, live_neighbors) {
                    // Rule 1: Any live cell with fewer than two live neighbours
                    // dies, as if caused by underpopulation.
                    (Cell::Alive, x) if x < 2 => Cell::Dead,
                    // Rule 2: Any live cell with two or three live neighbours
                    // lives on to the next generation.
                    (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                    // Rule 3: Any live cell with more than three live
                    // neighbours dies, as if by overpopulation.
                    (Cell::Alive, x) if x > 3 => Cell::Dead,
                    // Rule 4: Any dead cell with exactly three live neighbours
                    // becomes a live cell, as if by reproduction.
                    (Cell::Dead, 3) => Cell::Alive,
                    // All other cells remain in the same state.
                    (otherwise, _) => otherwise,
                };

                next[idx] = next_cell;
            }
        }

        self.cells = next;
    }
    pub fn new() -> Universe {
        utils::set_panic_hook();

        let width = 128;
        let height = 119;

        let cells = (0..width * height)
            .map(|i| {
                if i % 2 == 0 || i % 7 == 0 {
                    Cell::Alive
                } else {
                    Cell::Dead
                }
            })
            .collect();

        Universe {
            width,
            height,
            cells,
        }
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    /// Set the width of the universe.
    ///
    /// Resets all cells to the dead state.
    pub fn set_width(&mut self, width: u32) {
        self.width = width;
        self.cells = (0..width * self.height).map(|_i| Cell::Dead).collect();
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    /// Set the height of the universe.
    ///
    /// Resets all cells to the dead state.
    pub fn set_height(&mut self, height: u32) {
        self.height = height;
        self.cells = (0..self.width * height).map(|_i| Cell::Dead).collect();
    }

    pub fn cells(&self) -> *const Cell {
        self.cells.as_ptr()
    }

    pub fn toggle_cell(&mut self, row: u32, column: u32) {
        let idx = self.get_index(row, column);
        self.cells[idx].toggle();
    }

    pub fn shuffle(&mut self){
        let mut rng = rand::thread_rng();
        let randvals: Vec<u64> = (0..self.width * self.height).map(|_| rng.gen_range(0, 140)).collect();
        let cells:Vec<Cell> = randvals.iter()
        .map(|i| {
            if i % 2 == 0 || i % 7 == 0 {
                Cell::Alive
            } else {
                Cell::Dead
            }
        })
        .collect();

        self.cells = cells;
    }

    pub fn preset(&mut self, typein: u32){
        let cells = (0..self.width * self.height)
            .map(|_i| {
                Cell::Dead
            })
            .collect();
        self.cells = cells;
        let seeds:Vec<(u32, u32)> =
        match typein {
            0 => (1..self.width-1).map(
                |i| (self.height / 2,i)
            ).collect(),
            1=>vec![(3,1),(3,2),(3,3),(2,3),(1,2)],
            2=>vec![(17,16),(18,10),(18,11),(19,11),(19,15),(19,16),(19,17)],
            3=>vec![
                (2,4),
                (2,5),
                (2,6),
                (2,10),
                (2,11),
                (2,12),
            
                (4,2),
                (4,7),
                (4,9),
                (4,14),
            
                (5,2),
                (5,7),
                (5,9),
                (5,14),
            
                (6,2),
                (6,7),
                (6,9),
                (6,14),
            
                (7,4),
                (7,5),
                (7,6),
                (7,10),
                (7,11),
                (7,12),
            
                (9,4),
                (9,5),
                (9,6),
                (9,10),
                (9,11),
                (9,12),
            
                (10,2),
                (10,7),
                (10,9),
                (10,14),
            
                (11,2),
                (11,7),
                (11,9),
                (11,14),
            
                (12,2),
                (12,7),
                (12,9),
                (12,14),
            
                (14,4),
                (14,5),
                (14,6),
                (14,10),
                (14,11),
                (14,12), 
            ],
            4=>vec![
                (5,1),
                (5,2),
                (6,1),
                (6,2),

                (3,13), 
                (3,14),
                (4,12), 
                (4,16),
                (5,11), 
                (5,17),
                (6,11), 
                (6,15),
                (6,17), 
                (6,18),
                (7,11), 
                (7,17),
                (8,12), 
                (8,16),
                (9,13), 
                (9,14),

                (1,25),
                (2,23), 
                (2,25),
                (3,21), 
                (3,22),
                (4,21), 
                (4,22),
                (5,21), 
                (5,22),
                (6,23), 
                (6,25),
                (7,25),

                (3,35), 
                (3,36),
                (4,35), 
                (4,36),
            ],
            _=>vec![]
        };
        self.set_cells(seeds.as_slice());
    }
}

impl fmt::Display for Universe {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for line in self.cells.as_slice().chunks(self.width as usize) {
            for &cell in line {
                let symbol = if cell == Cell::Dead { '◻' } else { '◼' };
                write!(f, "{}", symbol)?;
            }
            write!(f, "\n")?;
        }

        Ok(())
    }
}
