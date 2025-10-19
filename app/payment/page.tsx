"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    address: "",
    upiId: "",
    transactionId: "",
    screenshot: null,
  })

  const [qrCode, setQrCode] = useState("")
  const [showForm, setShowForm] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        screenshot: file,
      }))
    }
  }

  const handlePrint = () => {
    const printWindow = window.open("", "", "height=600,width=800")
    printWindow?.document.write(`
      <html>
        <head>
          <title>SkillNest Enrollment Form</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .form-section { margin-bottom: 20px; }
            .form-row { display: flex; gap: 20px; margin-bottom: 15px; }
            .form-field { flex: 1; }
            label { font-weight: bold; display: block; margin-bottom: 5px; }
            input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>SkillNest - Student Enrollment Form</h1>
            <p>Empowering Communication, Confidence & Skills</p>
          </div>
          <div class="form-section">
            <div class="form-row">
              <div class="form-field">
                <label>Student Name:</label>
                <input type="text" value="${formData.studentName}" readonly />
              </div>
              <div class="form-field">
                <label>Age:</label>
                <input type="text" value="${formData.age}" readonly />
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>Address:</label>
                <input type="text" value="${formData.address}" readonly />
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label>UPI ID:</label>
                <input type="text" value="${formData.upiId}" readonly />
              </div>
              <div class="form-field">
                <label>Transaction ID:</label>
                <input type="text" value="${formData.transactionId}" readonly />
              </div>
            </div>
          </div>
          <div class="footer">
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <p>Thank you for enrolling with SkillNest!</p>
          </div>
        </body>
      </html>
    `)
    printWindow?.document.close()
    printWindow?.print()
  }

  return (
    <main>
      <Navigation />

      {/* Header Section */}
      <section className="py-32 bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">Enrollment & Payment</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Complete your enrollment with secure payment options
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* QR Code & UPI Section */}
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-12 rounded-3xl border border-amber-200 dark:border-slate-700 transition-colors">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Quick Payment</h2>

                {/* QR Code Display */}
                <div className="flex justify-center mb-12">
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-amber-300 dark:border-amber-600">
                    <div className="w-64 h-64 bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400 font-semibold mb-4">Scan to Pay</p>
                        <svg
                          className="w-32 h-32 mx-auto text-gray-400 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 11h8V3H3v8zm0 8h8v-8H3v8zm8-16h8V3h-8v8zm8 8h8v-8h-8v8zm0 8h8v-8h-8v8zm-8 0h8v-8h-8v8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UPI ID Input */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white">Enter UPI ID</label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    value={formData.upiId}
                    onChange={(e) => setFormData((prev) => ({ ...prev, upiId: e.target.value }))}
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition text-lg"
                  />
                </div>

                {/* Payment Methods Info */}
                <div className="mt-12 pt-12 border-t-2 border-amber-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Accepted Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">UPI</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Google Pay, PhonePe, Paytm</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Instant payment via UPI</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">Card</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Credit/Debit Card</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Visa, Mastercard accepted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Form Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-12 rounded-3xl border border-blue-200 dark:border-slate-700 transition-colors">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Student Enrollment Form</h2>

                <div className="space-y-6">
                  {/* Student Name */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">Full Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition text-lg"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Enter your age"
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition text-lg"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      rows={3}
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition text-lg resize-none"
                    />
                  </div>

                  {/* Transaction ID */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      placeholder="Enter UPI transaction ID"
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition text-lg"
                    />
                  </div>

                  {/* Screenshot Upload */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Payment Screenshot
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-6 py-4 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition cursor-pointer"
                      />
                      {formData.screenshot && (
                        <p className="mt-2 text-sm text-green-600 dark:text-green-400 font-semibold">
                          ✓ {formData.screenshot.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-8">
                    <button
                      onClick={handlePrint}
                      disabled={!formData.studentName || !formData.age || !formData.address}
                      className="flex-1 px-8 py-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-xl transition font-bold text-lg"
                    >
                      Download Form
                    </button>
                    <button
                      onClick={() => setShowForm(!showForm)}
                      className="flex-1 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition font-bold text-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {showForm && (
                <div className="p-8 bg-green-50 dark:bg-green-900 border-2 border-green-300 dark:border-green-700 rounded-xl">
                  <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                    ✓ Enrollment form submitted successfully! We'll contact you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
