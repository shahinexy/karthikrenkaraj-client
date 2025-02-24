import AddTampleModal from "@/components/tample/tampleModal/AddTampleModal";
import UserTable from "@/components/user/UserTable";

const UserPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
          All Temple List
        </h1>

        <div className="inline-block">
          <AddTampleModal />
        </div>
      </div>

      <div className="md:p-7 p-3 md:rounded-3xl rounded-xl bg-white">
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
