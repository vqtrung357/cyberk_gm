const BrandPosition = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
          <div className="border border-gray-800 p-8 rounded-lg bg-gray-900/20 hover:border-white transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Đối tác nhanh nhất trong Web3</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Cyberk là đối tác công nghệ Web3 nhanh nhất trong ngành. Chúng tôi đảm bảo giao MVP trong vòng chưa đầy 30 ngày—trao quyền cho các công ty khởi nghiệp và doanh nhân đi từ ý tưởng đến thị trường nhanh hơn bất kỳ ai khác mà không phải hy sinh chất lượng hay sự đổi mới.
            </p>
          </div>
          <div className="border border-gray-800 p-8 rounded-lg bg-gray-900/20 hover:border-white transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Dành cho những nhà đổi mới đầy tham vọng</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Cyberk được xây dựng cho các doanh nhân và các công ty khởi nghiệp giai đoạn đầu. Cyberk là đối tác đáng tin cậy cho những ai yêu cầu thực thi nhanh chóng, kỹ thuật xuất sắc và một đội ngũ coi mỗi dự án như của riêng mình. Đối với những nhà đổi mới đầy tham vọng sẵn sàng tạo dấu ấn trong Web3, Cyberk là bệ phóng để thành công.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPosition;