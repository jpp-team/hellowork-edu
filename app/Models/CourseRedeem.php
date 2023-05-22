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

    public function courseVoucher()
    {
        return $this->belongsTo(CourseVoucher::class, 'id_voucher', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
