import AssetOverview from "@/app/components/plans/AssetOverview"
import DashboardLayout from "../Layout"
import PlanCards from "@/app/components/plans/PlanCards"
import Tabs from "@/app/reusables/Tabs"
import { PlansData } from "@/app/constants/Plans"
const Plans = () => {
    // const tabs = [
    //     { title: 'Profile', content: <div>Profile Content</div> },
    //     { title: 'Dashboard', content: <div>Dashboard Content</div> },
    //   ];
    return (
        <div>
            <DashboardLayout>
                <div className="w-full bg-white">
                    <AssetOverview/>
                </div>
                <section className="w-full flex justify-center px-5"><Tabs tabs={PlansData} /></section>
                {/* <PlanCards/> */}
            </DashboardLayout>
        </div>
    )
}

export default Plans
