from game.casting.actor import Actor
from game.casting.cast import Cast
from game.scripting.action import Action


class MoveActorsAction(Action):
    def __init__(self):
        self.cast = Cast()

    def execute(self, cast, script):
        cast = Cast.get_all_actors(self)

        for i in cast:
            Actor.move_next()

    # TODO: Implement MoveActorsAction class here!

    # Override the execute(cast, script) method as follows:
    # 1) get all the actors from the cast
    # 2) loop through the actors
    # 3) call the move_next() method on each actor
