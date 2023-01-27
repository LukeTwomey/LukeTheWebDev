# start from node, because it has npm and also python. look to see if there's a better base to use that has both of those things
FROM node AS build

# set a directory for the app (within the container)
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# run the install and build commands.
RUN yarn
RUN yarn build

# now we bring in the nginx web server
FROM nginx

# now we copy our dist bundled files into the default nginx html folder.  
# also copy the nginx.conf which routes all pages back to index.html to prevent 404's when viewing route directly (or refreshing)
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# now copy moneypots files into moneypots subfolder
# COPY --from=build /usr/src/app/moneypots /usr/share/nginx/html/moneypots