import { useEffect } from 'react';
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const Notify = () => {
  useEffect(() => {
    toast.custom(
      (t) => (
        <div className='flex flex-row items-center justify-between w-96 bg-gray-900 px-4 py-6 text-white shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out'>
            <div className='text-xl'>
                <GiProgression />
            </div>
            <div className='flex flex-col items-center justify-center mx-auto cursor-default'>
                <h1 className='text-base text-gray-200 font-semibold leading-none tracking-wider text-center'>
                Coming Soon!
                </h1>
            </div>
            <div className='absolute top-2 right-2 cursor-pointer text-lg' onClick={() => toast.dismiss(t.id)}>
                <MdOutlineClose />
            </div>
        </div>
      ),
      { id: "unique-notification", position: "bottom-center" }
    );
  }, []);

  return <Toaster />;
};

export default Notify;
