import { fetchFilteredUsers } from "@/lib/data";
import { UserDetails } from "./userDetails";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface UsersListProps {
  query: string;
}

export default async function UsersList({ query } : UsersListProps) {

  const users = await fetchFilteredUsers(query);

  const renderTable = () => {
    return (
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {users?.map((user) => (
                <div
                  key={user.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <p>{user.name}</p>
                      </div>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p>{user.company.name}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UserDetails id={user.id} users={users} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Company name
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">View details</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users?.map((user) => (
                  <tr
                    key={user.id}
                    className="w-full border-b border-gray-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {user.company.name}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UserDetails id={user.id} users={users} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  const renderErrorMessage = () => {
    return (
      <div className="flex flex-col gap-4 pt-8 p-4 items-center justify-center sm:p-8 sm:flex-row">
        <ExclamationTriangleIcon className="text-gray-700 w-5"/>
        <h3 className="text-gray-600">Could not retrieve any data</h3>
      </div>
    );
  }

  return users.length > 0 ? renderTable() : renderErrorMessage();
}
