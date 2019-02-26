import TicTacToe from './tictactoe';

import { MAKE_MOVE, RESET_GAME } from './actions';

export const game = new TicTacToe();

export const ticTacToeAppInit = {
  board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  winner: 0
};

function transformGameState({ board, winner }) {
  return { board, winner };
}

export function ticTacToeApp(state, { type, x, y }) {
  switch (type) {
    case MAKE_MOVE: {
      if (state.winner !== 0 || state.board[x][y]) return state;

      return transformGameState(game.move(x, y));
    }

    case RESET_GAME: {
      return transformGameState(game.reset());
    }

    default: {
      return state;
    }
  }
}
