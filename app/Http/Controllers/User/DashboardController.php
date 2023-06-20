<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\CourseRedeem;
use App\Models\CourseVoucher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courseRedeemed = CourseRedeem::select("course.name AS course_name","category_course.name AS category_course_name","course.image"
        ,"course_voucher.code"
        ,"course_voucher.is_redem"
        ,"course_redem.id"
        ,"course_redem.id_voucher"
        ,"course_redem.id_user")
        ->join('users', 'users.id', '=', 'course_redem.id_user')
        ->join('course_voucher','course_redem.id_voucher','=','course_voucher.id')
        ->join('course','course.id','=','course_voucher.course_id')
        ->join('category_course','category_course.id','=','course.category_course_id')
        ->get();
        // $courseRedeemed = CourseRedeem::with(['courseVoucher', 'user'])->get();
        $courseAll = CourseVoucher::with(['course.courseCategory'])->get();

        return Inertia::render('Dashboard', [
            'courseRedeemed' => $courseRedeemed,
            'course' => $courseAll
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
