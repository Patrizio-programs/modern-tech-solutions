from optparse import check_choice
import random


class Card:
    def __init__(self):
        self.value = 0

    def draw_card(self):
        self.value = random.randrange(1, 14)
        return self.value


class Director:

    def __init__(self):
        self.card = Card.draw_card(self)
        self.new_card = 0
        self.choice = ''
        self.score = 0
        self.total_score = 300

    def game_update(self):
        print("Next card was: " + str(self.new_card))
        print("Your score is: " + str(self.total_score))
        x = input('Play again [y/n]')
        print(" ")
        if x == "y" and self.total_score > 0:
            self.game()

        else:
            exit()

    def check_choice(self, x):
        self.new_card = Card.draw_card(self)
        if x == 'l':
            if self.card > self.new_card:
                self.total_score = self.total_score + 100
            else:
                self.total_score = self.total_score - 75

        if x == 'h':
            if self.card < self.new_card:
                self.total_score = self.total_score + 100
            else:
                self.total_score = self.total_score - 75
        self.game_update()

    def prompt(self):
        print("The card is: " + str(self.card))
        self.choice = input("Higher or lower? [h/l]")
        self.check_choice(self.choice)

    def game(self):
        self.card = Card.draw_card(self)
        self.prompt()


x = Director()

x.game()
