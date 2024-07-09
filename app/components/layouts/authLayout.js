"use client";
import React from "react";
import logo from "@assets/images/viloxLogo.png"
import Image from "next/image";

function AuthLayout({ children, onSubmit, errMsg }) {
  const serialize = (form) => {
    var result = [];
    if (typeof form === "object" && form.nodeName === "FORM")
      Array.prototype.slice.call(form.elements).forEach(function (control) {
        if (
          control.name &&
          !control.disabled &&
          ["file", "reset", "submit", "button"].indexOf(control.type) === -1
        )
          if (control.type === "select-multiple")
            Array.prototype.slice
              .call(control.options)
              .forEach(function (option) {
                if (option.selected)
                  result.push(control.name + "=" + option.value);
              });
          else if (
            ["checkbox", "radio"].indexOf(control.type) === -1 ||
            control.checked
          )
            result.push(control.name + "=" + control.value);
      });
    var data = result.join("&").replace(/%20/g, "+");

    const serializeToJSON = (str) =>
      str
        .split("&")
        .map((x) => x.split("="))
        .reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: isNaN(value) ? value : Number(value),
          }),
          {}
        );

    return serializeToJSON(data);
  };




  if (isAuthenticated.status === "authenticated") {
    router.push("/admin/dashboard");
  } else {
    return (
      <div className="h-screen bg-black grid md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white h-screen p-4 flex flex-col">
          <div>
            <Image src={logo} className="w-20" alt="LOGO" />
          </div>
          <div className="flex-grow flex flex-col space-y-16 w-full justify-center">
            <div className="space-y-4">
              <div className="text-3xl">Welcome Back</div>
              <div className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione, corrupti consequatur animi fugiat numquam sed dolore repellendus
              </div>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault(), onSubmit(serialize(e.target));
                }} >
                <div className="space-y-4">
                  <div className="text-danger text-sm">{errMsg}</div>
                  <div className="space-y-5">{children}</div>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center text-xs select-none pointer-events-none">Powered by Vilox</div>
        </div>
        <div className="col-span-2"></div>
      </div>
    );
  }

}

export default AuthLayout;
