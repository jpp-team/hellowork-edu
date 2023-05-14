<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseRedeem extends Model
{
    use HasFactory;

    protected $table = 'course_redem';
    protected $fillable = ['id_voucher', 'id_user'];
    public $timestamps = false;
}
