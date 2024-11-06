import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">返家之路</h3>
            <p className="text-gray-400 text-sm">回歸自身，找回內在平靜</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span>台北市大安區和平東路二段xxx號</span>
              </p>
              <p className="text-gray-400">
                <span>02-xxxx-xxxx</span>
              </p>
              <p className="text-gray-400">
                <span>contact@example.com</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  最新消息
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white">
                  課程資訊
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 返家之路. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}