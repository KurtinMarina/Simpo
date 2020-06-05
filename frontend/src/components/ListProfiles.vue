<template>
    <div>
        <div class="profiles-wrapper">
            <div v-for="profileMetadata in listProfiles"
                 class="profile-metadata">
                <span>{{profileMetadata.name}}</span>
                <button v-on:click="editProfile(profileMetadata.id)"
                        class="btn btn-primary">Edit</button>
            </div>
        </div>
        <EditProfile v-if="getIsEdit"
                     :profileId="currentProfileId"
                     @closeEditingProfile="closeEditingProfile"></EditProfile>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action, Getter} from "vuex-class";
import {Getters} from "@/store/getters";
import {ProfileMetadata} from "@/store/types";
import {Actions} from "@/store/actions";
import EditProfile from "@/components/EditProfile.vue";

@Component({
    components: {EditProfile}
})
export default class ListProfiles extends Vue {
    private isEdit: boolean = false;
    private currentProfileId: number | null = null;

    @Getter(Getters.GET_LIST_PROFILES)
    private listProfiles!: ProfileMetadata[] | [];

    @Action(Actions.LIST_PROFILES)
    private getListProfiles!: () => void;

    private mounted(){
        this.getListProfiles();
    }

    private get getIsEdit(){
        return this.isEdit;
    }

    private editProfile(profileId : number){
        this.isEdit = true;
        this.currentProfileId = profileId;
    }

    private closeEditingProfile(){
        this.isEdit = false;
    }
}
</script>

<style lang="scss" scoped>
.profiles-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 25px 30px 0 30px;

    .profile-metadata {
        background: #eaecf3;
        min-width: 300px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        height: 55px;
        margin: 5px 15px;

        span {
            font-size: 18px;
            font-weight: bold;
            align-self: center;
        }

        .btn {
            align-self: center;
        }
    }
}
</style>