import React from 'react';

const Profile: React.FC = () => {
  const profileData = [
    { label: 'Name', value: 'Takuro Yoshio' },
    { label: 'Occupation', value: 'Student / Freelance Engineer' },
    { label: 'Skills', value: 'HPCreating / API connecting with AI / Blockchain NFT / AI SaaS' },
    { label: 'Environment', value: 'Cursor / Genspark / Google AI Studio' },
    { label: 'Comment', value: '個人でHP・WEB系のフロント制作を主に活動しています。お客様のご要望、ご予算に応じて柔軟に対応いたします。' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Overview</h2>
      
      <div className="overflow-hidden border border-neutral-800 rounded-lg">
        <table className="w-full text-left border-collapse">
          <tbody>
            {profileData.map((item, index) => (
              <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors group">
                <th className="py-6 px-6 font-medium text-neutral-500 w-1/3 md:w-1/4 align-top border-r border-neutral-800 uppercase text-xs tracking-wider">
                  {item.label}
                </th>
                <td className="py-6 px-6 text-neutral-200 font-light group-hover:text-white transition-colors">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;