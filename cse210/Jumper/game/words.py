import random


class Word:
    def __init__(self):
        self._word_list = ["jump", "real", "high", 'flip', "neat"]
        self.index_choice = random.randint(0, 4)
        self.choose_word = ""
        self._secret_word = ""

    def select_word(self):
        self.choose_word = self._word_list[self.index_choice]

        self._secret_word = list(self.choose_word)

        self.display_blank_word()

    def display_blank_word(self):
        for i in self._secret_word:
            print(" _", end=" ")

    def display_updated_word(self, x):
        for i in self._secret_word:
            if x == i:
                print(i, end=" ")

            else:
                print("_", end=" ")
