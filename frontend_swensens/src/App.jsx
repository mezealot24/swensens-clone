import "./App.jsx";
import React from "react";

// App.jsx สำหรับเว็บ Swensen's - แสดงหน้าหลักและจัดการ routing ไปยังหน้าต่างๆ
function HomePage() {
	return (
		<div className="container mx-auto px-4">
			{/* ส่วนแสดงโปรโมชั่น */}
			<section className="my-8">
				<h2 className="text-2xl font-bold mb-4">โปรโมชั่นพิเศษ</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* การ์ดแสดงโปรโมชั่น */}
					<div className="bg-white rounded-lg shadow-md p-4">
						<img
							src="/promo1.jpg"
							alt="โปรโมชั่น 1"
							className="w-full rounded-lg"
						/>
						<h3 className="mt-2 font-bold">ซื้อ 1 แถม 1</h3>
						<p className="text-gray-600">เฉพาะวันจันทร์-ศุกร์</p>
					</div>
					{/* สามารถเพิ่มการ์ดโปรโมชั่นอื่นๆ */}
				</div>
			</section>

			{/* ส่วนแสดงเมนูยอดนิยม */}
			<section className="my-8">
				<h2 className="text-2xl font-bold mb-4">เมนูแนะนำ</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{/* การ์ดแสดงเมนูไอศกรีม */}
					<div className="bg-white rounded-lg shadow-md p-4">
						<img
							src="/ice-cream1.jpg"
							alt="ไอศกรีม 1"
							className="w-full rounded-lg"
						/>
						<h3 className="mt-2 font-bold">ช็อคโกแลตซันเด</h3>
						<p className="text-gray-600">฿129</p>
					</div>
					{/* สามารถเพิ่มการ์ดเมนูอื่นๆ */}
				</div>
			</section>

			{/* ส่วนแสดงสาขาใกล้คุณ */}
			<section className="my-8">
				<h2 className="text-2xl font-bold mb-4">ค้นหาสาขาใกล้คุณ</h2>
				<div className="bg-white rounded-lg shadow-md p-4">
					<input
						type="text"
						placeholder="ระบุตำแหน่งของคุณ"
						className="w-full p-2 border rounded"
					/>
					{/* ส่วนแสดงแผนที่และรายการสาขา */}
				</div>
			</section>
		</div>
	);
}

export default function App() {
	return (
		<div className="min-h-screen bg-gray-100">
			<HomePage />
			{/* ในอนาคตสามารถเพิ่ม routing ไปยังหน้าอื่นๆ เช่น
        - หน้าเมนูทั้งหมด
        - หน้าตะกร้าสินค้า
        - หน้าชำระเงิน
        - หน้าประวัติการสั่งซื้อ
        - หน้าโปรไฟล์ผู้ใช้
      */}
		</div>
	);
}
