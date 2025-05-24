<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProjectLanguage extends Model
{
    protected $fillable = ['name', 'percentage'];

    
    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class,'language_project');
    }
}   
