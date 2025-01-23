<form  action="contact_form_handler.php" method="POST" class="bg-white  shadow-2xl rounded-2xl p-8 space-y-8 relative z-10">
                <!-- Heading -->
                <div class="text-center">
                    <h3 class="text-2xl font-semibold text-blue-800 font-poppins">
                        Contact Us
                    </h3>
                    <p class="text-gray-500  font-poppins">
                        We’d love to hear from you!
                    </p>
                </div>

                <!-- Form Fields -->
                <div class="space-y-4"id="contactForm">
                    <!-- Name -->
                    <div class="relative">
                        <span class="absolute top-3 left-3 text-light-blue-500 ">
                            <i class="fas fa-user"></i>
                        </span>
                        <input type="text" name="name" placeholder="Your Name" required
                            class="pl-10 w-full border border-gray-300  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue-300  bg-gray-50  text-gray-800  font-poppins" />
                    </div>

                    <!-- Email -->
                    <div class="relative">
                        <span class="absolute top-3 left-3 text-light-blue-500 ">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <input type="email" name="email" placeholder="Your Email" required
                            class="pl-10 w-full border border-gray-300  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue-300  bg-gray-50  text-gray-800  font-poppins" />
                    </div>

                    <!-- Contact Number -->
                    <div class="relative">
                        <span class="absolute top-3 left-3 text-light-blue-500 ">
                            <i class="fas fa-phone"></i>
                        </span>
                        <input type="tel" name="contact" placeholder="Your Contact No" required
                            class="pl-10 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue-300  bg-gray-50  text-gray-800  font-poppins" />
                    </div>

                    <!-- Services Dropdown -->
                    <div class="relative">
                        <select name="services" required
                            class="block w-full border border-gray-300  bg-gray-50  text-gray-800  rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-light-blue-300  focus:border-light-blue-500">
                            <option value="" disabled selected class="text-gray-400">Select Required Service
                            </option>
                            <option value="IT & Professional Staffing">IT & Professional Staffing</option>
                            <option value="Healthcare Staffing">Healthcare Staffing</option>
                            <option value="IaaS">IaaS</option>
                            <option value="SaaS & PaaS">SaaS & PaaS</option>
                            <option value="TaaS">TaaS</option>
                        </select>

                        <!-- Dropdown Icon -->
                        <span class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-indigo-500">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </div>

                    <!-- Description -->
                    <textarea name="description" rows="4" placeholder="Tell us more about your requirements" required
                        class="w-full border border-gray-300  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue-300  bg-gray-50  text-gray-800  font-poppins"></textarea>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                    class="w-full bg-gradient-to-r from-[#003366] to-[#66B2FF] hover:from-[#66B2FF] hover:to-[#003366] text-white font-bold py-3 px-6 rounded-lg transition font-poppins">
                    Submit
                </button>
            </form>



 <form id="contactForm" class="bg-white shadow-2xl rounded-2xl p-8 space-y-8 relative z-10">
                <div class="text-center">
                    <h3 class="text-2xl font-semibold text-blue-800 font-poppins">Contact Us</h3>
                    <p class="text-gray-500 font-poppins">We’d love to hear from you!</p>
                </div>

                <div class="space-y-4">
                    <div class="relative">
                        <input type="text" name="name" placeholder="Your Name" required
                            class="pl-10 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none">
                    </div>
                    <div class="relative">
                        <input type="email" name="email" placeholder="Your Email" required
                            class="pl-10 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none">
                    </div>
                    <div class="relative">
                        <input type="tel" name="contact" placeholder="Your Contact No" required
                            class="pl-10 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none">
                    </div>
                    <div class="relative">
                        <select name="services" required
                            class="block w-full border border-gray-300 bg-gray-50 text-gray-800 rounded-lg px-4 py-3">
                            <option value="" disabled selected>Select Required Service</option>
                            <option value="IT & Professional Staffing">IT & Professional Staffing</option>
                            <option value="Healthcare Staffing">Healthcare Staffing</option>
                            <option value="IaaS">IaaS</option>
                            <option value="SaaS & PaaS">SaaS & PaaS</option>
                            <option value="TaaS">TaaS</option>
                        </select>
                    </div>
                    <textarea name="description" rows="4" placeholder="Tell us more about your requirements" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"></textarea>
                </div>
                <button type="submit"
                    class="w-full bg-gradient-to-r from-[#003366] to-[#66B2FF] hover:from-[#66B2FF] hover:to-[#003366] text-white font-bold py-3 px-6 rounded-lg transition">
                    Submit
                </button>
            </form>