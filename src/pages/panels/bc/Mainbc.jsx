import React from 'react'
import Sidebar from '../../../components/panels/Sidebar'
import bc from '../../../assets/bc.png'

function Mainbc() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">BlockChain</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                            <p className="text-sm">Blockchain</p>
                        </div>
                    </div>
                </div>
                <div className="dark:text-gray-100">
                    <p>A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.[1][2][3][4] Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). The timestamp proves that the transaction data existed when the block was created. Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.</p>
                </div>
                <h1 className="text-xl font-bold md:tracking-tight md:text-4xl underline">Why we use it?</h1>
                <div className="dark:text-gray-100 text-gray-900">
                    <p>If you read anything about technology and digital transformation, you’ll no doubt have seen a lot of hype around blockchain. Stripping away the hype, and once some teething problems are solved, I believe that blockchain technology is set to revolutionise many industries, in the same way as Big Data and even the internet.</p>
                </div>
                <img src={bc} />
            </article>
        </div>
    </div>
  )
}

export default Mainbc
