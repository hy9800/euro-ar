'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import PhoneInput from '@/components/ui/phone-input'
import { cn } from '@/lib/utils'
import { useContactForm } from '@/services/forms/forms-hooks'
import { toast } from 'sonner'
import ReCaptchaV2 from '@/components/ui/recaptcha-v2'
import { validateRecaptchaConfig } from '@/constants/recaptcha'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    full_name: '',
    company: '',
    email: '',
    phone_number: '',
    phone_country_code: '+971',
    subject: '',
    country: '',
    message: ''
  })
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Use the contact form mutation
  const contactMutation = useContactForm()

  // Check if reCAPTCHA is configured
  const isRecaptchaConfigured = validateRecaptchaConfig()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handlePhoneChange = (fullPhoneNumber: string) => {
    // Extract country code and phone number from the full number
    const countryCode = fullPhoneNumber.match(/^\+\d+/)?.[0] || '+971'
    const phoneNumber = fullPhoneNumber.replace(/^\+\d+\s*/, '')
    
    setFormData(prev => ({
      ...prev,
      phone_number: phoneNumber,
      phone_country_code: countryCode
    }))
    
    // Clear phone error when user starts typing
    if (errors.phone_number) {
      setErrors(prev => ({
        ...prev,
        phone_number: ''
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.full_name.trim()) newErrors.full_name = 'الاسم الكامل مطلوب'
    if (!formData.company.trim()) newErrors.company = 'اسم الشركة مطلوب'
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صالح'
    }
    if (!formData.phone_number.trim()) newErrors.phone_number = 'رقم الهاتف مطلوب'
    if (!formData.subject.trim()) newErrors.subject = 'الموضوع مطلوب'
    if (!formData.country.trim()) newErrors.country = 'الدولة مطلوبة'
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token)
    setIsRecaptchaVerified(true)
  }

  const handleRecaptchaError = (error: any) => {
    // Only log error in development mode
    if (process.env.NODE_ENV === 'development') {
      console.error('reCAPTCHA error:', error)
    }
    setIsRecaptchaVerified(false)
    setRecaptchaToken(null)
  }

  const handleRecaptchaExpire = () => {
    setIsRecaptchaVerified(false)
    setRecaptchaToken(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('يرجى ملء جميع الحقول المطلوبة بشكل صحيح')
      return
    }
    
    // Check reCAPTCHA only if it's configured
    if (isRecaptchaConfigured && !isRecaptchaVerified) {
      toast.error('يرجى إكمال التحقق من reCAPTCHA')
      return
    }

    // Prepare data for API
    const apiData = {
      full_name: formData.full_name,
      phone_number: `${formData.phone_country_code}${formData.phone_number}`,
      email: formData.email,
      country: formData.country,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
      ...(isRecaptchaConfigured && recaptchaToken && { recaptcha_token: recaptchaToken }),
    }

    try {
      await contactMutation.mutateAsync(apiData)
      
      toast.success('شكراً لرسالتك! سنتواصل معك قريباً.')
      
      // Reset form
      setFormData({
        full_name: '',
        company: '',
        email: '',
        phone_number: '',
        phone_country_code: '+971',
        subject: '',
        country: '',
        message: ''
      })
      setErrors({})
      setIsRecaptchaVerified(false)
      setRecaptchaToken(null)
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.')
    }
  }
  return (
    <section className="py-16 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Form */}
          <div className="w-full lg:flex-1">
            <h2 className="mb-5 text-[#314EA9] text-xl md:text-2xl font-semibold">تواصل معنا</h2>
            <div className="border border-[#969fac] p-4 md:p-8 rounded-lg">
              
              <form
                id="contactPageForm"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="form-group flex flex-col gap-1">
                    <label htmlFor="contact_full_name" className="text-[13px] text-[#333]">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="contact_full_name"
                      name="full_name"
                      placeholder="الاسم الكامل"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning={true}
                      className={cn(
                        "h-11 w-full px-4 border border-[#e2e8f0] rounded-xl outline-none transition-all duration-300 hover:border-[#314EA9] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1),0_4px_12px_rgba(102,126,234,0.15)] focus:-translate-y-0.5 max-md:h-10 max-md:px-3",
                        errors.full_name && "border-red-500"
                      )}
                    />
                    {errors.full_name && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.full_name}
                      </span>
                    )}
                  </div>

                  <div className="form-group flex flex-col gap-1">
                    <label htmlFor="contact_company" className="text-[13px] text-[#333]">
                      الشركة
                    </label>
                    <input
                      type="text"
                      id="contact_company"
                      name="company"
                      placeholder="الشركة"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning={true}
                      className={cn(
                        "h-11 w-full px-4 border border-[#e2e8f0] rounded-xl outline-none transition-all duration-300 hover:border-[#314EA9] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1),0_4px_12px_rgba(102,126,234,0.15)] focus:-translate-y-0.5 max-md:h-10 max-md:px-3",
                        errors.company && "border-red-500"
                      )}
                    />
                    {errors.company && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.company}
                      </span>
                    )}
                  </div>

                  <div className="form-group full-width flex flex-col gap-1 md:col-span-2">
                    <label htmlFor="contact_email" className="text-[13px] text-[#333]">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="contact_email"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning={true}
                      className={cn(
                        "h-11 w-full px-4 border border-[#e2e8f0] rounded-xl outline-none transition-all duration-300 hover:border-[#314EA9] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1),0_4px_12px_rgba(102,126,234,0.15)] focus:-translate-y-0.5 max-md:h-10 max-md:px-3",
                        errors.email && "border-red-500"
                      )}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group full-width flex flex-col gap-1 md:col-span-2">
                    <PhoneInput
                      id="phone1"
                      name="phone_number"
                      label="رقم الهاتف"
                      value={`${formData.phone_country_code}${formData.phone_number}`}
                      onChange={handlePhoneChange}
                      placeholder="أدخل رقم الهاتف"
                      required
                      defaultCountry="AE"
                      error={!!errors.phone_number}
                      helperText={errors.phone_number}
                    />
                  </div>

                  <div className="form-group flex flex-col gap-1">
                    <label htmlFor="contact_subject" className="text-[13px] text-[#333]">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="contact_subject"
                      name="subject"
                      placeholder="الموضوع"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning={true}
                      className={cn(
                        "h-11 w-full px-4 border border-[#e2e8f0] rounded-xl outline-none transition-all duration-300 hover:border-[#314EA9] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1),0_4px_12px_rgba(102,126,234,0.15)] focus:-translate-y-0.5 max-md:h-10 max-md:px-3",
                        errors.subject && "border-red-500"
                      )}
                    />
                    {errors.subject && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group flex flex-col gap-1">
                    <label htmlFor="contact_country" className="text-[13px] text-[#333]">
                      الدولة
                    </label>
                    <input
                      type="text"
                      id="contact_country"
                      name="country"
                      placeholder="الدولة"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning={true}
                      className={cn(
                        "h-11 w-full px-4 border border-[#e2e8f0] rounded-xl outline-none transition-all duration-300 hover:border-[#314EA9] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1),0_4px_12px_rgba(102,126,234,0.15)] focus:-translate-y-0.5 max-md:h-10 max-md:px-3",
                        errors.country && "border-red-500"
                      )}
                    />
                    {errors.country && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.country}
                      </span>
                    )}
                  </div>
                </div>

                <div className="message-group flex flex-col gap-1">
                  <label htmlFor="contact_message" className="text-[13px] text-[#333]">
                    الرسالة
                  </label>
                  <textarea
                    id="contact_message"
                    name="message"
                    placeholder="رسالتك"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    suppressHydrationWarning={true}
                    className={cn(
                      "w-full min-h-[120px] px-4 py-3 border border-[#e2e8f0] rounded-xl outline-none resize-none text-sm transition-all duration-300 hover:border-[#314EA9] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1),0_4px_12px_rgba(102,126,234,0.15)] focus:-translate-y-0.5 placeholder:text-[#6F6F6F] max-md:min-h-[100px] max-md:px-3 max-md:py-2",
                      errors.message && "border-red-500"
                    )}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-submition flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
                  <button
                    type="submit"
                    disabled={!isRecaptchaVerified || contactMutation.isPending}
                    className="submit-btn min-w-[170px] w-full lg:w-fit h-11 md:h-12 rounded-[10px] px-[18px] text-sm font-semibold text-white bg-gradient-to-r from-[#314EA9] to-[#446AE1] border-none cursor-pointer flex items-center justify-center gap-2 ml-0 transition-all duration-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="btn-text">
                      {contactMutation.isPending ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                    </span>
                    {!contactMutation.isPending && <i className="fas fa-chevron-left"></i>}
                  </button>
                  
                  {/* reCAPTCHA v2 */}
                  <ReCaptchaV2
                    onVerify={handleRecaptchaVerify}
                    onError={handleRecaptchaError}
                    onExpire={handleRecaptchaExpire}
                    theme="light"
                    size="normal"
                  />
                </div>

              </form>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 lg:max-w-md flex items-start justify-center lg:mt-16">
            <Image
              src="/assets/images/contact-img.svg"
              alt="Contact Image"
              width={400}
              height={300}
              className="w-full max-w-sm h-auto rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
