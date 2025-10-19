import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { courseSlug, studentName, studentEmail, studentPhone } = body

    // Validate required fields
    if (!courseSlug || !studentName || !studentEmail) {
      return NextResponse.json(
        { error: "Missing required fields: courseSlug, studentName, and studentEmail are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(studentEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the enrollment request (in production, you would save to database or process payment)
    console.log("Course enrollment request:", {
      courseSlug,
      studentName,
      studentEmail,
      studentPhone,
      timestamp: new Date().toISOString(),
    })

    // Generate enrollment ID
    const enrollmentId = `ENR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Enrollment successful! Check your email for confirmation.",
        enrollmentId,
        data: {
          courseSlug,
          studentName,
          studentEmail,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json({ error: "Failed to process enrollment" }, { status: 500 })
  }
}
