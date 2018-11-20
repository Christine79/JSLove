class ApplicationController < ActionController::Base
  def javascript_tag(content_or_options_with_block = nil, html_options = {}, &block)
       content =
         if block_given?
           html_options = content_or_options_with_block if content_or_options_with_block.is_a?(Hash)
           capture(&block)
         else
           content_or_options_with_block
         end

       content_tag(:script, javascript_cdata_section(content), html_options)
     end

     def javascript_path(source)
      compute_public_path(source, 'javascripts', 'js')
    end
end
