import DashboardLayout from "../Layout"
import PlanPageComponents from "../../page-components/plans"

const Dashboard = ({children}: {children: React.ReactNode}) => {
    return (
      <div>
         <DashboardLayout>
          <PlanPageComponents/>
         </DashboardLayout>
      </div>
    )
  }
  
  export default Dashboard