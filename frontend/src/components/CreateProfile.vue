<template>
    <div class="create-form">
        <div class="form-group">
            <input class="form-control"
                   v-model="addData.name"
                   type="text"
                   name="name"
                   placeholder="Name"
                   id="name">
            <input class="form-control"
                   v-model="addData.bio"
                   type="text"
                   name="bio"
                   placeholder="Bio"
                   id="bio">
            <input class="form-control"
                   v-model="addData.fbId"
                   type="text"
                   name="fbId"
                   placeholder="Facebook ID"
                   id="fbId">
        </div>
        <button type="submit"
                class="btn btn-success"
                v-on:click="addProfile()">Create</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action} from "vuex-class";
import {Actions} from "@/store/actions";

@Component({})
export default class NewProfiles extends Vue {
    private addData = {
        name: "",
        bio: "",
        fbId: ""
    };

    @Action(Actions.NEW_PROFILE)
    private createNewProfile!: (payload: { name: string, bio: string, fbId: string}) => void;

    private addProfile(){
        this.createNewProfile({name: this.addData.name, bio: this.addData.bio, fbId: this.addData.fbId});
        this.resetFormFields();
    }

    private resetFormFields(){
        let addData: any = this.addData;

        Object.keys(addData).forEach(key => {
            addData[key] = '';
        });
    }
}
</script>

<style lang="scss" scoped>
.form-group, .create-form {
    display: flex;
    margin: 0;

    input {
        margin: 0 5px;
    }
}
</style>