"use client";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            لم نتمكن من العثور على الصفحة
          </h2>
          <p className="text-muted-foreground">
            لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تم نقلها أو حذفت أو
            أدخلت رابط غير صحيح.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Home className="h-4 w-4" />
            الرئيسية
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <ArrowLeft className="h-4 w-4" />
            الرجوع
          </button>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          إذا كنت تعتقد أن هذه خطأ، يرجى الاتصال بالدعم.
        </div>
      </div>
    </div>
  );
}
