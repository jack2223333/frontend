export const metadata = {
  title: "Vulnerability detection",
  description: "Page description",
};

import Link from "next/link";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Similar file detection from two repositories
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]" action="http://127.0.0.1:8000/file_pair/" method="POST" encType="multipart/form-data">
            <div className="space-y-5">
            <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Operation <span className="text-red-500">*</span>
                </label>
                <select id="operation" name="operation" className="form-input w-full">
                    <option value="add">add</option>
                    <option value="delete">delete</option>
                    <option value="check">check</option>
                    
                </select>
              </div>  
            <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  project name 
                </label>
                <input type="text" name="project" className="form-input w-full"></input>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                Harmony path 
                </label>
                <input type="text" name="path1" className="form-input w-full"></input>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Linux path 
                </label>
                <input type="text" name="path2" className="form-input w-full"></input>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                Detect
              </button>
            </div>
          </form>
          {/* Bottom link */}

        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-6 md:py-10">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Patch file detection
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]" action="http://127.0.0.1:8000/compare/" method="POST" encType="multipart/form-data">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Linux patch file <span className="text-red-500">*</span>
                </label>
                <input type="text" name="diff_file" className="form-input w-full"></input>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Linux path <span className="text-red-500">*</span>
                </label>
                <input type="text" name="linux_path" className="form-input w-full"></input>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Harmony path <span className="text-red-500">*</span>
                </label>
                <input type="text" name="oh_path" className="form-input w-full"></input>
              </div>

            </div>

            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                Detect
              </button>
            </div>
          </form>
          {/* Bottom link */}

        </div>
      </div>
    </section>
  );
}
