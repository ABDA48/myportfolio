<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = ['name'];

    public function blogPosts(): HasMany
    {
        return $this->hasMany(BlogPost::class);
    }
}
