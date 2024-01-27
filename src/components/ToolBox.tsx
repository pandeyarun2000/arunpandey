import { useState } from 'react';
import { TbBrandCpp, TbBrandTypescript } from 'react-icons/tb';
import { DiJava, DiPython, DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiMicrosoftoffice, SiDjango, SiExpress, SiMysql, SiFirebase, SiFlutter, SiSqlite } from 'react-icons/si';
import { BsGit, BsAndroid2 } from 'react-icons/bs';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { FcLinux } from 'react-icons/fc';
import { FaHandshake, FaReact } from 'react-icons/fa';
import { PiStrategy } from 'react-icons/pi';

import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

interface Tool {
	index: number;
	name: string;
	icon: React.ReactElement;
}

const otherTools = [
	{
		index: 0,
		name: 'MS Office Suite',
		icon: <SiMicrosoftoffice className={'m-4 text-6xl text-red-500'} />,
	},
	{
		index: 1,
		name: 'Python',
		icon: <DiPython className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 2,
		name: 'Django',
		icon: <SiDjango className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 3,
		name: 'React',
		icon: <FaReact className={'m-4 text-6xl text-yellow-600'} />,
	},
];

const languageTools: Tool[] = [
	{
		index: 0,
		name: 'Analytical Thinking',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-100" />,
	},
	{
		index: 1,
		name: 'Problem-Solving',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-200 " />,
	},

	{
		index: 2,
		name: 'Communication',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-300 " />,
	},
	{
		index: 3,
		name: 'Interpersonal',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-400 " />,
	},

	{
		index: 4,
		name: 'Client Management',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-500 " />,
	},
	{
		index: 5,
		name: 'Project Management',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-600 " />,
	},

	{
		index: 6,
		name: 'Research',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-700 " />,
	},
	{
		index: 7,
		name: 'Adaptability',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-800 " />,
	},
	{
		index: 8,
		name: 'Critical Thinking',
		icon: <PiStrategy className="m-2 text-6xl text-cyan-900 " />,
	},
	{
		index: 9,
		name: 'Leadership',
		icon: <PiStrategy className="m-2 text-6xl text-white-100 " />,
	},
	{
		index: 10,
		name: 'Negotiation',
		icon: <PiStrategy className="m-2 text-6xl text-white-200 " />,
	},
	{
		index: 11,
		name: 'Data Analysis',
		icon: <PiStrategy className="m-2 text-6xl text-white-300 " />,
	},
	{
		index: 12,
		name: 'Conflict Resolution',
		icon: <PiStrategy className="m-2 text-6xl text-white-400 " />,
	},


];

const frameworkTools: Tool[] = [
	{
		index: 0,
		name: 'Analysis',
		icon: <FaMoneyCheckDollar className={'m-4 text-6xl text-green-100'} />,
	},
	{
		index: 1,
		name: 'Business Case',
		icon: <FaMoneyCheckDollar className={'m-4 text-6xl text-green-200'} />,
	},
	{
		index: 2,
		name: 'ROI',
		icon: <FaMoneyCheckDollar className={'m-4 text-6xl text-green-300'} />,
	},
	{
		index: 3,
		name: 'Budgeting',
		icon: <FaMoneyCheckDollar className={'m-4 text-6xl text-green-400'} />,
	},
	{
		index: 4,
		name: 'Forecating',
		icon: <FaMoneyCheckDollar className={'m-4 text-6xl text-green-500'} />,
	},
];

const databaseTools: Tool[] = [
	{
		index: 0,
		name: 'Lifecycle',
		icon: <FaHandshake className={'m-4 text-6xl text-blue-100'} />,
	},
	{
		index: 1,
		name: 'Strategy',
		icon: <FaHandshake className={'m-4 text-6xl text-blue-200'} />,
	},
	{
		index: 2,
		name: 'Supplier Relationship',
		icon: <FaHandshake className={'m-4 text-6xl text-blue-300'} />,
	},
	{
		index: 3,
		name: 'Contract Management',
		icon: <FaHandshake className={'m-4 text-6xl text-blue-400'} />,
	},
];



const columnHeaders = [
	
	{
		name: 'Technical',
		tools: otherTools,
	},

	{
		name: 'Financial',
		tools: frameworkTools,
	},

	{
		name: 'Sourcing',
		tools: databaseTools,
	},
	
	{
		name: 'Consulting',
		tools: languageTools,
	},



];

export default function ToolBox() {
	const [tools, setTools] = useState(otherTools);

	return (
		<>
			<Element name="toolbox" className="relative" />
			<div className="mx-5 mb-48 overflow-hidden rounded-xl  border-2 border-cyan-300 bg-cyan-100 px-4 pb-5 pt-6 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white md:mx-10 md:px-8 md:pb-8">
				<h3 className="text-center text-2xl font-medium md:text-3xl">Skills</h3>
				<div className="mt-6 flex flex-col sm:flex-row">
					<div className="mb-5 flex flex-row justify-between overflow-scroll rounded-xl bg-cyan-200 px-2 py-5 dark:bg-gray-700 sm:mb-0 sm:mr-8 sm:flex-col sm:overflow-visible md:px-5">
						{columnHeaders.map((columnHeader) => {
							return (
								<Fade bottom key={columnHeader.name}>
									<h4
										className="mb-2 cursor-pointer whitespace-nowrap rounded px-4 py-2 text-center hover:bg-cyan-500 hover:text-white dark:hover:bg-gray-600"
										onClick={() => {
											setTools([...columnHeader.tools]);
										}}
									>
										{columnHeader.name}
									</h4>
								</Fade>
							);
						})}
					</div>
					<div className="grid w-full grid-cols-2 rounded-xl bg-cyan-200 p-5 dark:bg-gray-700 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  xl:grid-cols-10">
						{tools.map((tool) => {
							return (
								<Fade right key={tool.index} cascade>
									<div className="m-auto">
										<a>
											<motion.button
												whileHover={{
													scale: 1.2,
													rotate: 360,
													transition: { duration: 2 },
												}}
												whileTap={{ scale: 0.9 }}
											>
												{tool.icon}
											</motion.button>
										</a>
										<p className="text-center text-sm">{tool.name}</p>
									</div>
								</Fade>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
