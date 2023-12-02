<template>
  <div id="app" class="min-h-screen flex flex-col relative">
    
    <div class="flex-1">
      <img
        class="object-cover w-full h-1/2 screen-h"
        src="img/robot/map.png"
        alt="Robot Map"
      />
    </div>

    
    <div id="VehicleSelection" class="flex-1 relative">
      
      <div class="w-full h-2 border-t"></div>

      
      <div class="w-full text-center border-t-2 p-1.5 text-gray-700 text-lg font-semibold">
        
      </div>

      <!-- Scrollable section for vehicle options -->
      <div class="scrollSection">
        <!-- Vehicle option 1 -->
        <div class="bg-custom-gray">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/robot/ride.png">
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-2xl mb-1">Max1</div>
                
              </div>
            </div>
          </div>
        </div>

        <!-- Vehicle option 2 -->
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/robot/ride.png">
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-2xl mb-1">Max2</div>
                
              </div>
            </div>
          </div>
        </div>

        <!-- Vehicle option 3 -->
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/robot/ride.png">
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-2xl mb-1">Max3</div>
                
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div 
        class="
          flex 
          items-center 
          justify-center 
          bg-white
          py-6 
          px-4
          w-full 
          absolute 
          bottom-0 
          shadow-inner
        "
      >
        
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  #map {
    width: 100%;
    height: 10vh;
    top: 0px;
    left: 0px;
  }

  /* Styling for the VehicleSelection section */
  #VehicleSelection {
    .scrollSection {
      height: calc(50vh - 120px);
      position: relative;
      overflow-y: auto; 
      width: 100%;
    }

    /* Styling for the background color */
    .bg-custom-gray {
      background-color: rgb(237, 237, 237);
    }
  }
</style>
