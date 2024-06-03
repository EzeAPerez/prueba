import { totalFilms } from "@/app/lib/dataFilms";
import { totalSeries } from "@/app/lib/dataSeries"

export async function AdminPage() {
  const countSeries = await totalSeries();
  const countFilms = await totalFilms();

  return (
      <div className="flex flex-col min-h-screen text-white">
        <main className="flex-1 py-8 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Total Movies</h2>
                <span className="text-2xl font-bold">{countFilms}</span>
              </div>
              <p className="text-gray-400">This is the total number of movies in your library.</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Total Series</h2>
                <span className="text-2xl font-bold">{countSeries}</span>
              </div>
              <p className="text-gray-400">This is the total number of series in your library.</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Total Transactions</h2>
                <span className="text-2xl font-bold">1,234</span>
              </div>
              <p className="text-gray-400">This is the total number of transactions in your library.</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6 col-span-1 md:col-span-3">
              <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-[#0f1629] text-left">
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">User</th>
                      <th className="px-4 py-2">Item</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#0f1629]">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">John Doe</td>
                      <td className="px-4 py-2">The Godfather</td>
                      <td className="px-4 py-2">$9.99</td>
                      <td className="px-4 py-2">2023-04-15</td>
                    </tr>
                    <tr className="border-b border-[#0f1629]">
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">Jane Smith</td>
                      <td className="px-4 py-2">Breaking Bad</td>
                      <td className="px-4 py-2">$19.99</td>
                      <td className="px-4 py-2">2023-04-12</td>
                    </tr>
                    <tr className="border-b border-[#0f1629]">
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Bob Johnson</td>
                      <td className="px-4 py-2">Game of Thrones</td>
                      <td className="px-4 py-2">$14.99</td>
                      <td className="px-4 py-2">2023-04-10</td>
                    </tr>
                    <tr className="border-b border-[#0f1629]">
                      <td className="px-4 py-2">4</td>
                      <td className="px-4 py-2">Sarah Lee</td>
                      <td className="px-4 py-2">The Office</td>
                      <td className="px-4 py-2">$9.99</td>
                      <td className="px-4 py-2">2023-04-08</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }