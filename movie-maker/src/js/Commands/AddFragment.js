import Command from "@/js/Commands/Command";

export default class AddFragment extends Command {
    constructor(fragment) {
        super();
        this.fragment = fragment;
    }

    execute() {
        if (Command.store.state.activeFragment === null) {
            Command.store.commit('activeFragment', this.fragment);
        }
        Command.store.commit('addToTimeline', {fragment: this.fragment});
    }

    undo() {
        Command.store.commit('removeFromTimeline', this.fragment);
    }
}