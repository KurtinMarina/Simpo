export interface RootState {
    profileMetadata: ProfileMetadata[] | [],
    chooseProfile: ChooseProfile | null
}

export interface ProfileMetadata {
    id: number,
    name: string
}

export interface ChooseProfile {
    id: number,
    name: string,
    bio: string,
    fbId: string
}