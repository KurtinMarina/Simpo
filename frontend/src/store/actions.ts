import {ActionTree} from "vuex";
import {RootState, ProfileMetadata, ChooseProfile} from "@/store/types";
import {Mutations} from "@/store/mutations";
import axios, {AxiosError, AxiosResponse} from 'axios';

export enum Actions {
    LIST_PROFILES = "LIST_PROFILES",
    NEW_PROFILE = "NEW_PROFILE",
    SINGLE_PROFILE_DATA = "SINGLE_PROFILE_DATA",
    UPDATE_PROFILE = "UPDATE_PROFILE"
}

const apiGateway = axios.create({
    baseURL: "http://localhost:3000",
});

export const ActionsTree: ActionTree<RootState, RootState> = {

    [Actions.LIST_PROFILES]: ({ commit }) => {
        apiGateway.get("/all-profiles")
        .then((axiosResponse: AxiosResponse<ProfileMetadata[]>) => {
            commit(Mutations.SET_LIST_PROFILES, axiosResponse.data);
        }).catch((error: AxiosError) => {
            console.error(error);
        });
    },

    [Actions.SINGLE_PROFILE_DATA]:({commit}, profileId: number) => {
        apiGateway.get("/profile/"+ profileId)
        .then((axiosResponse: AxiosResponse<ChooseProfile>) => {
            commit(Mutations.SET_SINGLE_PROFILE, axiosResponse.data);
        }).catch((error: AxiosError) => {
            console.error(error);
        });
    },

    [Actions.NEW_PROFILE]:({commit, dispatch}, payload: {name: string, bio: string, fbId: string}) => {
        apiGateway.post("/profile/create", payload)
        .then(() => {
            return dispatch(Actions.LIST_PROFILES); //Call to LIST_PROFILES
        }).catch((error: AxiosError) => {
            console.error(error);
        });
    },

    [Actions.UPDATE_PROFILE]:({commit, dispatch}, data: ChooseProfile) => {
        apiGateway.put("/profile/update", data)
        .then(() => {
            return dispatch(Actions.LIST_PROFILES); //Call to LIST_PROFILES
        }).catch((error: AxiosError) => {
            console.error(error);
        });
    }
};
