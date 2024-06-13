<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\MessageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    
   /*  return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]); */
    return redirect('/tasks');
});


/* Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
 */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/tasks', [TaskController::class, 'index']);

    Route::get('/messages', [MessageController::class, 'index']);
    Route::get('/messages/edit/{message}', [MessageController::class, 'edit']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', function () {
    return Inertia::render('Home/Index');
});



require __DIR__.'/auth.php';
