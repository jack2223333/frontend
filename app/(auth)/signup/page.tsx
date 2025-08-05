export const metadata = {
  title: "Vulnerability detection",
  description: "Page description",
};

import Link from "next/link";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Input the code
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]" action="http://127.0.0.1:8000/search/" method="POST" encType="multipart/form-data">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Embedding Model <span className="text-red-500">*</span>
                </label>
                <select id="model" name="model" className="form-input w-full">
                    <option value="gte">GTE-large</option>
                    <option value="CodeSage">CodeSage</option>
                    
                </select>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Retrieval algorithm <span className="text-red-500">*</span>
                </label>
                <select id="algorithm" name="algorithm" className="form-input w-full">
                    <option value="dense">dense</option>
                    <option value="bm25-text">bm25-text</option>
                    <option value="jaccard-text">jaccard-text</option>
                </select>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  The number of retrieved similar functions <span className="text-red-500">*</span>
                </label>
                <select id="number" name="number" className="form-input w-full">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Patch file<span className="text-red-500">*</span>
                </label>
                {/* <textarea
                  id="textarea"
                  name="code"
                  type="textarea"
                  className="form-input w-full"
                ></textarea> */}
                <input id="patch" name = "patch" className="form-input w-full" type = "file"></input>
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
