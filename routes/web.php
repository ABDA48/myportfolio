<?php

use App\Http\Controllers\ProfileController;
use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Project;
use App\Models\ProjectLanguage;
use App\Models\Service;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $projects = Project::with('category')
    ->with('languages')
    ->with('service')
    ->get();
    $services = Service::all();
    $categories = Category::all();
    $blogs=BlogPost::with('category')->with('comments')->get(); 
    return Inertia::render('Welcome', [
      'projects' => $projects,
      'services' => $services,
      'categories' => $categories,
      "blogs"=> $blogs
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/services', function () {
    $service=Service::all();
    return Inertia::render('ServicesPage',[
        'services'=> $service
    ]);
});

Route::get('/projects', function () {
    $projects = Project::with('category')
    ->with('languages')
    ->with('service')
    ->get();
    $categories = Category::all();

    return Inertia::render('ProjectsPage',[
        'projectsData'=> $projects,
        'categories'=> $categories
    ]);
});

Route::get('/projects/{id}', function ($id) {
    $project = Project::with('category')
    ->with('languages')
    ->with('service')
    ->find($id);
    $relatedProjects = Project::with(['category'])
    ->where('category_id', $project->category_id)
    ->where('id', '!=', $project->id)
    ->latest()
    ->take(6)
    ->get();
     

    return Inertia::render('ProjectDetailPage', [
        'project' => $project,
        'relatedProjects'=> $relatedProjects
    ]);
});

Route::get('/about', function () {
    return Inertia::render('AboutPage');
});

Route::get('/blog', function () {
    $blogs=BlogPost::with('category')->with('comments')->get();
    return Inertia::render('BlogPage',[
        'blogs'=> $blogs
    ]);
});

Route::get('/blog/{id}', function ($id) {
    $blogs= BlogPost::with('category')->with('comments')->find($id);
    return Inertia::render('BlogPostPage', [
       'blogs'=> $blogs,
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
});

// Catch-all fallback route (must be at the end)
Route::fallback(function () {
    return Inertia::render('NotFound');
});
