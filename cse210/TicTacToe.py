# Tic tac toe board created with board variable.
board = [1, 2, 3,
         4, 5, 6,
         7, 8, 9]


# funtion to check if X has gotten 3 in a row.


def checkwinx():
    if board[0] and board[1] and board[2] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')
        exit()

    if board[3] and board[4] and board[5] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')
        exit()

    if board[6] and board[7] and board[8] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[0] and board[3] and board[6] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[1] and board[4] and board[7] == 'X':
        print("X is the winner!")
        exit()

    if board[2] and board[5] and board[8] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')
        exit()

    if board[0] and board[4] and board[8] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[2] and board[4] and board[6] == 'X':
        print("X is the winner!")
        print('Good game. Thanks for playing!')

        exit()


# funtion to check if O has gotten 3 in a row.

def checkwino():
    if board[0] and board[1] and board[2] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[3] and board[4] and board[5] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[6] and board[7] and board[8] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[0] and board[3] and board[6] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[1] and board[4] and board[7] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[2] and board[5] and board[8] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[0] and board[4] and board[8] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()

    if board[2] and board[4] and board[6] == 'O':
        print("O is the winner!")
        print('Good game. Thanks for playing!')

        exit()


# funtion changes the original board numbers to either X or O
def updateBoard(x, o):
    n = x-1
    board[n] = 'X'

    nn = o-1
    board[nn] = 'O'

    checkwinx()
    checkwino()

    game()


# Takes a input from X player and O player

def turn():

    print("x's turn to choose a square (1-9): ")
    x = input()
    x = int(x)

    print("o's turn to choose a square (1-9):")
    o = input()
    o = int(o)
    updateBoard(x, o)


# Shows board

def game():

    print('|', board[0], '|', board[1], '|', board[2], '|')
    print('--------------------')
    print('|', board[3], '|', board[4], '|', board[5], '|')
    print('--------------------')
    print('|', board[6], '|', board[7], '|', board[8], '|')

    turn()


def main():
    game()


main()
