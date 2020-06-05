<template>
    <div class="overlay-wrapper">
        <div class="overlay"></div>
        <div class="edit-wrapper"
             v-if="chooseProfile">
            <div class="header">
                <div class="title">
                    <img :src="facebookIcon"
                         @error="setDefaultImage">
                    <span class="title-name">Edit {{chooseProfile.name}}</span>
                </div>
                <div v-on:click="close()"
                     class="close">x</div>
            </div>
            <hr>
            <div class="form-group">
                <input class="form-control"
                       v-model="chooseProfile.name"
                       type="text"
                       name="name"
                       placeholder="Enter name"
                       id="name">
                <input class="form-control"
                       v-model="chooseProfile.bio"
                       type="text"
                       name="bio"
                       placeholder="Enter bio"
                       id="bio">
                <input class="form-control"
                       v-model="chooseProfile.fbId"
                       type="text"
                       name="fbId"
                       placeholder="Enter facebook ID"
                       id="fbId">
            </div>
            <button class="btn btn-light btn-outline-secondary"
                    v-on:click="close()">Close</button>
            <button class="btn btn-primary"
                    v-on:click="updateCurrentProfile()">Save changes</button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {Action, Getter} from "vuex-class";
import {Actions} from "@/store/actions";
import {Getters} from "@/store/getters";
import {ChooseProfile} from "@/store/types";

@Component({})
export default class EditProfiles extends Vue {
    private defaultPerson = require("@/assets/person-default.png");

    @Getter(Getters.GET_CHOOSE_PROFILE)
    private chooseProfile!: ChooseProfile;

    @Action(Actions.SINGLE_PROFILE_DATA)
    private getSingleProfileData!: (profileId: number) => void;

    @Action(Actions.UPDATE_PROFILE)
    private updateProfile!: (data: ChooseProfile) => void;

    @Prop({required: true})
    private profileId!: number;

    private mounted(){
        this.getSingleProfileData(this.profileId);
    }

    private close(){
        this.$emit("closeEditingProfile");
    }

    private setDefaultImage(event:any){
        event.target.src = this.defaultPerson;
    }

    private get facebookIcon(){
        return this.chooseProfile && this.chooseProfile.fbId
            ? `http://graph.facebook.com/${this.chooseProfile.fbId}/picture`
            : this.defaultPerson;
    }

    private updateCurrentProfile(){
        this.updateProfile(this.chooseProfile);
        this.close();
    }
}
</script>

<style lang="scss" scoped>
.overlay-wrapper {
    position: relative;

    .overlay {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: black;
        opacity: 0.6;
        top: 0;
        left: 0;
    }

    .edit-wrapper {
        width: 40%;
        min-width: 330px;
        text-align: right;
        position: absolute;
        background: white;
        padding: 1em;
        left: 30%;
        border-radius: 0.5em;
        box-shadow: 0 8px 16px 4px rgba(0,0,0,0.65);

        .form-control {
            margin: 8px 0;
        }

        .close {
            cursor: pointer;
        }

        .btn {
            margin: 0 3px;
        }

        .header {
            display: flex;
            justify-content: space-between;

            .title-name {
                margin-left: 10px;
                font-weight: bold;
            }

            img {
                border-radius: 25px;
                height: 50px;
            }
        }
    }
}
</style>