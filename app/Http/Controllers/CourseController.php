<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseRedeem;
use App\Models\CourseVoucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        $courseWithCategory = Course::with(['courseCategory' => function ($query) use ($course) {
            $query->where('id', $course->category_course_id);
        }])->first();
        $courseWithVoucher = CourseVoucher::with(['course'])->first();
        return Inertia::render('Course/CourseDetail', [
            'course' => $courseWithCategory,
            'courseVoucher' => $courseWithVoucher
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }

    public function redeem(Request $request)
    {
        $request->validate([
            'voucher' => 'required',
            'course' => 'required'
        ]);

        if (Auth::check()) {
            $redeem = CourseRedeem::create([
                'id_voucher' => $request->voucher,
                'id_user' => Auth::user()->id
            ]);
        } else {
            return redirect('/course/' . $request->course)->withErrors(['message' => 'Please log in first']);
        }

        return redirect()->back()->with('message', "Voucher has been redeemed");
    }
}
