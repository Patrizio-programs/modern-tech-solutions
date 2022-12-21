import random
from words import Word


class Jumper:
    def __init__(self):
        self.chances = 5
        self.man = []
        self._five = (" ___")
        self._four = ("/___\ ")
        self._three = ("\   /")
        self._two = (" \ /")
        self._one = ("  o")
        self.__body = (" /|\ ")
        self._legs = (" / \ ")
        self.filler = ("\n ^^^^^^^^")

    def create_jumper(self):
        self.man.insert(0, self.filler)
        self.man.insert(0, self._legs)
        self.man.insert(0, self.__body)
        if self.chances == 5:
            self.man.insert(0, self._one)
            self.man.insert(0, self._two)
            self.man.insert(0, self._three)
            self.man.insert(0, self._four)
            self.man.insert(0, self._five)
        elif self.chances == 4:
            self.man.insert(0, self._one)
            self.man.insert(0, self._two)
            self.man.insert(0, self._three)
            self.man.insert(0, self._four)

        elif self.chances == 3:
            self.man.insert(0, self._one)
            self.man.insert(0, self._two)
            self.man.insert(0, self._three)

        elif self.chances == 2:
            self.man.insert(0, self._one)
            self.man.insert(0, self._two)

        elif self.chances == 1:
            self._one = ("  x")
            self.man.insert(0, self._one)

        self.display_jumper()

    def display_jumper(self):
        for i in self.man:
            print(i)

    def update_chances(self):
        self.chances = self.chances - 1


class Guess_Words:
    def __init__(self) -> None:
        self.guess = ""
        self.word = Word()
        self.jumper = Jumper()

    def check_guess(self, x):

        for i in self.word._secret_word:
            if x == i:

                self.word.display_updated_word(i)
            elif x != i:
                self.jumper.update_chances()
                self.word.display_updated_word(i)

    def get_guess(self):
        self.guess = input("\n Guess a letter [a-z]: ")
        self.check_guess(self.guess)


class Director:
    def __init__(self):
        self.start = Word()
        self.jumper = Jumper()
        self.guess = Guess_Words()

    def game(self):
        self.jumper.create_jumper()
        self.start.select_word()
        while self.jumper.chances > 0:
            self.guess.get_guess()
            self.jumper.create_jumper()


x = Director()

x.game()
