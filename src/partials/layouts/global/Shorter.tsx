import { ChangeEventHandler, EventHandler, FormEventHandler, useState } from "react";

export default function Shorter() {
  const [longUrl, setLongUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (longUrl === '') {
      setError('Url is required.');
      return;
    }
    const regex = /^https?:\/\/(\w+\.?)*(\/?)(([a-zA-Z0-9_%?&=-]+\/?)+)?$/gm;
    if (!regex.test(longUrl)) {
      setError('Url is not valid.');
      return
    }
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLongUrl(e.target.value);
    setError('');
  }

  return (
    <div className={`container relative z-40`}>
      <form
        className={`p-4 sm:px-[2rem] sm:py-6 md:px-[3.25rem] md:py-10
           bg-[url('/images/bg-shorten-desktop.svg')] bg-darkViolet bg-no-repeat
           max-w-[1110px] mx-auto rounded-lg flex-wrap`}
        onSubmit={submitHandler}
      >
        <div
          className={`flex flex-col sm:flex-row sm:space-x-5
                      sm:space-y-0 space-y-3`}
        >
          <div className="flex-grow">
            <input
              type="text"
              name="longUrlInput"
              className={`input inputLg w-full ${
                error !== "" ? " !shadow-red" : ""
              }`}
              placeholder="Shorten a link here..."
              value={longUrl}
              onChange={changeHandler}
            />
            <div className="!ml-0 italic text-red text-sm sm:h-0 mt-0.5">
              {error}
            </div>
          </div>
          <button
            type="submit"
            className="btn btnLg btnCyan btnForm w-full sm:w-auto"
          >
            Shorten It!
          </button>
        </div>
      </form>
    </div>
  );
}
