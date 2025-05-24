<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    protected $fillable = [
        'title',
        'category_id',
        'tags',
        'image',
        'description',
        'video_url',
        'client_name',
        'completion_date',
        'project_url',
        
        'features',
        'service_id',
    ];

    protected $casts = [
        'tags' => 'array',
        'features' => 'array',
        'completion_date' => 'date',
    ];

   
    
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function languages(): BelongsToMany
    {
        return $this->belongsToMany(ProjectLanguage::class,'language_project');
    }
}
