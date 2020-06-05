import {RootState} from "@/store/types";
import {GetterTree} from "vuex";

export enum Getters {
    GET_LIST_PROFILES = "GET_LIST_PROFILES",
    GET_CHOOSE_PROFILE = "GET_CHOOSE_PROFILE"
}

export const GettersTree: GetterTree<RootState, RootState> = {
    [Getters.GET_LIST_PROFILES]: state => state.profileMetadata,
    [Getters.GET_CHOOSE_PROFILE]: state => state.chooseProfile
};
