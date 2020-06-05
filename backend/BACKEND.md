# API endpoints

##  routing

--- 
**All profiles** `GET /all-profiles`

--- 
- On success `HTTP 200` getting data(id and name) of all profiles, response body: `[{id: number, name: string}]`
- On failure:
    - `HTTP 404` No profiles found
  
---  
**Get profile by ID** `GET /profile/:id` 

--- 
- On success `HTTP 200` getting all data(id, name, bio. fb ID) of chosen profile
- On failure:
    - `HTTP 404` No profile by given id
    
--- 
**Create profile** `POST /profile/create`

--- 
- Request body: `{name: string, bio: string, fbId: string}`
- On success `HTTP 201` new profile created. Response body: `{message: string}`
    
---    
**Update profile** `PUT //profile/update`

--- 
- Request body: `{id: number, name: string, bio: string, fbId: string}`
- On success `HTTP 200` profile updated. Response body: `{message: string}`

