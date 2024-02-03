import React from "react";

export default function AddProductPage() {
  return (
    <div className="min-w-full min-h-screen">
      <div className="">
        <div className="container mx-auto">
          <h1 className="text-2xl text-Headline pt-20 font-extralight mb-3">
            Add Product
          </h1>
          <form action="" className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered input-success w-full max-w-xs bg-transparent"
              required
            />
            <textarea
              className="textarea textarea-success w-full max-w-xs"
              placeholder="Description"
              name="description"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
