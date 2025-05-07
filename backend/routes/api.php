<?php

use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::get(uri: '/users', action: function(): AnonymousResourceCollection {
    return UserResource::collection(resource: User::all());
});