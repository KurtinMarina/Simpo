import {ChooseProfile, ProfileMetadata, RootState} from "@/store/types";
import {MutationTree} from "vuex";

export enum Mutations {
    SET_LIST_PROFILES = "SET_LIST_PROFILES",
    SET_SINGLE_PROFILE = "SET_SINGLE_PROFILE"
}

export const MutationsTree: MutationTree<RootState> = {
    [Mutations.SET_LIST_PROFILES]: (state, data: ProfileMetadata[]) => {
        state.profileMetadata = data;
    },

    [Mutations.SET_SINGLE_PROFILE]: (state, data: ChooseProfile) => {
        state.chooseProfile = data;
    }
};
