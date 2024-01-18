import RootLayout from '@/app/layout' 
import Image from 'next/image';
import FaqCenter from '@/components/help/FaqCenter/FaqCenter';
import FaqLeftSideBar from '@/components/help/FaqLeftSideBar/page'; 
import FaqRightSideBar from '@/components/help/FaqRightSideBar/page';

export default function Page() {
    return (
        <div className="flex">
            <FaqLeftSideBar />
            <FaqCenter />
            <FaqRightSideBar />
        </div>
    );
    }