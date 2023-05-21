<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $table = 'course';
    public $timestamps = false;

    public function courseCategory()
    {
        return $this->belongsTo(CourseCategory::class, 'category_course_id');
    }

    public function courseVoucher()
    {
        return $this->hasMany(CourseVoucher::class, 'course_id', 'id');
    }
}
